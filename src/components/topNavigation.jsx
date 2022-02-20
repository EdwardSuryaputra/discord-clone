
const TopNavigation = ({auth}) => {
    return(
        <div className="top-navigation">
                  <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    );
};

export default TopNavigation;