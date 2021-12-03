/* eslint-disable jsx-a11y/anchor-is-valid */
//the upper line means the eslint is disabled for just this file  and for the rule : anchor-is-valid

const Navbar = ({ setcurrentComp }) => {


    return (
        <nav>
            <a onClick={() => { setcurrentComp('calculator') }} href="#">Calculator</a>
            <a onClick={() => { setcurrentComp('timer') }} href="#">Timer</a>
            <a onClick={() => { setcurrentComp('tap') }} href="#">Tap</a>
        </nav>
    );
}

export default Navbar;