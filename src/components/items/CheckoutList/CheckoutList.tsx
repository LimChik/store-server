
import { useAppSelector } from '../../../hooks';
import CheckoutItem from '../CheckoutItem/CheckoutItem';

const CheckoutList = () => {
  const chooseGood = useAppSelector(state => state.singlePage.goodItem);

  let sumPrice = useAppSelector(state => state.singlePage.sumPrice)
  
  return (
    <div>
      {chooseGood.map((elem, index) => (
        <CheckoutItem
          key={index}
          chooseItem={elem}
          
        />
      ))}
      <h1>{sumPrice}</h1>
    </div>
  );
};

export default CheckoutList;