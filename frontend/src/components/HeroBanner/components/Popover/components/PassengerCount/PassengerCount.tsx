import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { PassengerInfo } from '@constants/types';
import { Button, InputNumber, Typography } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import './PassengerCount.scss';
import useHeaderSearch from '@hooks/useHeaderSearchStore';
import AgeSelector from '../AgeSelector/AgeSelector';

type Props = {
  passengerData: PassengerInfo;
};

const PassengerCount = ({
  passengerData: { defaultValue, label, min, max },
}: Props) => {
  const [value, setValue] = useState(defaultValue ?? 0);
  const [childData, setChildData] = useState<{ age: number }[]>([]);
  const { setPassengerData, passengerData } = useHeaderSearch();

  const handleValueChange = useCallback(
    (type: 'minus' | 'plus') => {
      if (type === 'minus') {
        setValue(prev => prev - 1);
        if (label === 'Children') {
          setChildData(prevArray => {
            const newArray = [...prevArray];
            newArray.pop();
            return newArray;
          });
        }
      } else {
        setValue(prev => prev + 1);
        if (label === 'Children') {
          setChildData([...childData, { age: 0 }]);
        }
      }
    },
    [childData, label]
  );

  useEffect(() => {
    const data = { ...passengerData };
    switch (label.toLowerCase()) {
      case 'adults':
        data.adults = value;
        break;

      case 'children':
        data.children = childData;
        break;

      case 'rooms':
        data.rooms = value;
        break;
    }
    setPassengerData(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      <div className='popover-items'>
        <InputNumber
          min={min}
          max={max}
          step={1}
          value={value}
          style={{ display: 'none' }}
        />
        <Typography.Text
          style={{
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '20px',
          }}>
          {label}
        </Typography.Text>
        <div className='popover__range'>
          <Button
            disabled={value === min}
            onClick={() => handleValueChange('minus')}
            style={{
              width: '40px',
              height: '40px',
              padding: '4px 8px',
            }}
            type='text'>
            <MinusOutlined
              style={{
                color: value === min ? '#a2a2a2' : '#006ce4',
              }}
            />
          </Button>
          <Typography.Text
            style={{
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              minWidth: '40px',
              margin: '0 var(--spacing_1x)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {value}
          </Typography.Text>
          <Button
            disabled={value === max}
            onClick={() => handleValueChange('plus')}
            style={{
              width: '40px',
              height: '40px',
              padding: '4px 8px',
            }}
            type='text'>
            <PlusOutlined
              style={{
                color: value === max ? '#a2a2a2' : '#006ce4',
              }}
            />
          </Button>
        </div>
      </div>
      {label.toLowerCase() === 'children' &&
        passengerData.children.length > 0 && (
          <div className='children__age--container'>
            <div className='children__age--select'>
              {Array.from({ length: passengerData.children.length }).map(
                (_, index) => (
                  <AgeSelector
                    key={index}
                    onSelect={value => {
                      const data = { ...passengerData };
                      const childrenData = [...childData];
                      childrenData[index].age = value;
                      data.children = childrenData;
                      setChildData(childrenData);
                      setPassengerData(data);
                    }}
                  />
                )
              )}
            </div>
            <div className='children__age--desc'>
              To find you a place to stay that fits your entire group along with
              correct prices, we need to know how old your child will be at
              check-out
            </div>
          </div>
        )}
    </>
  );
};

export default PassengerCount;
