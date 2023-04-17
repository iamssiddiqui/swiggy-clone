import { Link } from "react-router-dom";
const Title = () => (
    <a href="/">
    <img className="h-24 p-2" alt="logo" src="https://i.pinimg.com/originals/95/3c/4c/953c4c528d3476e4385eadabf9169e37.jpg"/>
    </a>
);

const HeaderComponent = function() {
  return (
      <div className= "flex bg-pink-100 shadow-lg text-gray-700">
          {Title()}
          <div className= "nav-items">
            <ul className="flex py-8 text-3xl">
                <Link to="/">
                    <li className="px-14">Home</li>
                </Link>

                <Link to="/about">
                    <li className="px-14">About</li>
                </Link>

                <Link to="/contact">
                    <li className="px-14">Contact Us</li>
                </Link>

                <Link to="/Instamart">
                    <li className="px-14">Instamart</li>
                </Link>

                <Link to="/Cart">
                    <li className="px-14">Cart</li>
                </Link>

              </ul>
          </div>
      </div>
  );
};


//Only one default export per module
export default HeaderComponent