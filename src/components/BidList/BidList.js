import './BidList.css';


const BidList = () => {
    const startBid = { bid: 100 };
    return (
        <ul>
            <li>

                {startBid.bid}€
            </li>
        </ul>

    );
}
export default BidList;