import { Select } from 'antd';
import './AgeSelector.scss';
import { ageSelectData } from '@constants/data';

type Props = {
  onSelect: (value: number) => void;
};

const AgeSelector = ({ onSelect }: Props) => {
  const handleChange = (value: number) => {
    onSelect(value);
  };
  return (
    <Select
      defaultValue={-1}
      style={{
        width: 'calc(50% - var(--spacing_1x))',
        marginTop: 'var(--spacing_2x)',
      }}
      status='error'
      onChange={handleChange}
      options={ageSelectData}
    />
  );
};

export default AgeSelector;
