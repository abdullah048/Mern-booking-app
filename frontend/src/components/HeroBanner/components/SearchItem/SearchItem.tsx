import { SearchItem } from '@constants/types';
import { AutoComplete, Button, DatePicker, Popover, Typography } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import type { CellRenderInfo } from 'rc-picker/es/interface';
import { useCallback, useState } from 'react';
import './SearchItem.scss';
import Content from '../Popover/Popover';
import { useMediaQuery } from 'react-responsive';
import useHeaderSearch from '@hooks/useHeaderSearchStore';

type Props = {
  item: SearchItem;
  index: number;
};

type RangeValue = [Dayjs | null, Dayjs | null] | null;

const SearchItem = ({ item: { icon, placeholder, type }, index }: Props) => {
  const { passengerData, setDestination, duration, setDuration, destination } =
    useHeaderSearch();
  const [value, setValue] = useState<RangeValue>(duration);
  const media900 = useMediaQuery({
    query: '(max-width:900px)',
  });
  const [options, setOptions] = useState<{ value: string }[]>([
    { value: 'Burns Bay Road' },
  ]);
  const [openPopover, setOpenPopover] = useState(false);

  const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
  });

  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    setDestination(data);
  };

  const handlePopoverChange = () => {
    setOpenPopover(!openPopover);
  };

  const renderItem = () => {
    switch (type) {
      case 'search':
        return (
          <AutoComplete
            options={options}
            onSelect={onSelect}
            onSearch={text => setOptions(getPanelValue(text))}
            variant='borderless'
            style={{
              border: '1px solid transparent',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: 500,
              width: '100%',
            }}
            allowClear
            placeholder={placeholder}
          />
        );
      case 'date':
        return (
          <DatePicker.RangePicker
            suffixIcon={false}
            style={{
              width: '100%',
            }}
            value={value}
            onChange={value => {
              setValue(value);
              setDuration(value);
            }}
            variant='borderless'
            cellRender={cellRender}
          />
        );

      case 'select':
        return (
          <Popover
            content={<Content closePopover={handlePopoverChange} />}
            trigger='click'
            open={openPopover}
            onOpenChange={handlePopoverChange}>
            <Typography.Text
              style={{
                width: '100%',
              }}>
              {passengerData
                ? `${passengerData.adults} adults - ${passengerData.children.length} children - ${passengerData.rooms} rooms`
                : placeholder}
            </Typography.Text>
          </Popover>
        );
      case 'button':
        return (
          <Button
            type='text'
            onClick={() =>
              console.log({
                destination,
                duration: {
                  from: dayjs(duration[0]).format('YYYY/MM/DD'),
                  to: dayjs(duration[1]).format('YYYY/MM/DD'),
                },
                passengerData,
              })
            }
            style={{
              width: '100%',
              height: '100%',
              color: 'white',
              fontSize: '20px',
              fontWeight: '600',
              lineHeight: '28px',
            }}>
            {placeholder}
          </Button>
        );
      default:
        return null;
    }
  };

  const cellRender = useCallback(
    (current: number | Dayjs, info: CellRenderInfo<Dayjs>) => {
      if (info.type !== 'date') {
        return info.originNode;
      }
      if (typeof current === 'number') {
        return <div className='ant-picker-cell-inner'>{current}</div>;
      }
      return <div className='ant-picker-cell-inner'>{current.date()}</div>;
    },
    []
  );

  return (
    <div
      className='search__container'
      style={{
        marginLeft: index !== 0 && !media900 ? 'var(--spacing_1x)' : '',
        marginTop: index !== 0 && media900 ? 'var(--spacing_1x)' : '',
      }}>
      <div className='search__inner--wrapper'>
        <div
          style={{
            border: 0,
            margin: 0,
            padding: 0,
            width: '100%',
          }}>
          <div
            className='search__content--container'
            style={{
              gap: index === 2 ? '10px' : '',
            }}>
            {icon && (
              <div className='search__icon--container'>
                <img
                  src={icon}
                  alt='icon'
                  style={{
                    width: '24px',
                    height: '24px',
                  }}
                />
              </div>
            )}
            {renderItem()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
