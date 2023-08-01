
import { useDispatch, useSelector } from 'react-redux';
import styles from './Comparison.module.scss'
import  './Comparison.module.scss'
import { useEffect } from 'react';
import { fetchEstates } from '../../features/estate.slice';

const Comparison = () => {
    const user = useSelector((state) => state.auth.user.comparison);
    const estates = useSelector((state) => state.estates.estates);

    const dispatch = useDispatch();
    const favoriteEstates = estates.filter((estate) => user?.includes(estate._id));

    useEffect(() => {
      dispatch(fetchEstates());
    }, [dispatch]);
  

    console.log("favoriteEstates", estates);
    
    
    return (
        <div className={styles.table}>
           <div>
           <div>КОМНАТНОСТЬ</div>
            <div>ОБЩАЯ ПЛОЩАДЬ</div>
            <div>АДРЕСС</div>
           </div>
           <div>
           {
            favoriteEstates.map(item => {
                return (
                  <>
                    <div>{item.rooms}</div>
                    <div>{item.area}</div>
                    <div>{item.address}</div></>
                )
            })
           }
           </div>

        </div>
    );
}

export default Comparison