import { passengerInfo } from '@constants/data';
import './Popover.scss';
import PassengerCount from './components/PassengerCount/PassengerCount';
import { Button } from 'antd';

type Props = {
  closePopover: () => void;
};

const Popover = ({ closePopover }: Props) => {
  return (
    <div className='popover--container'>
      {passengerInfo.map(info => (
        <PassengerCount key={info.id} passengerData={info} />
      ))}
      <Button
        onClick={closePopover}
        type='default'
        style={{
          border: '1px solid #006ce4',
          marginTop: 'var(--spacing_4x)',
          width: '100%',
          color: '#006ce4',
          borderRadius: '4px',
          padding: '4px 12px',
          minHeight: '36px',
          minWidth: '36px',
          fontWeight: '600',
        }}>
        Done
      </Button>
    </div>
  );
};

export default Popover;
