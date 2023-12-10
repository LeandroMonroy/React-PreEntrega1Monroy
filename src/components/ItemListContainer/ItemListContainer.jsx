import "./ItemListContainer.css";
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const ItemListContainer = (props) => {
  return (
    <section className="shopping-container">
      <div className="shopping-cart">
       
        <h2>{props.greeting}</h2>
        <div className="shopping-perfil">
          <a href="">Sign in</a> to see if you have any saved items.
          <p>My Profile</p>
          <ul>
            <li>
            <span>
                <TokenOutlinedIcon />
              </span>Orders</li>
            <li>
              <span>
                <BookmarkBorderOutlinedIcon />
              </span>
              Your Saves
            </li>
            <li>
            <span>
                <PieChartOutlineOutlinedIcon />
              </span>Account</li>
            <li>
              <span>
                <AccountCircleOutlinedIcon />
              </span>
              Sign in
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;
