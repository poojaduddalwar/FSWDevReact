import ListItem from "./ListItem";

const Content = () => {

    const chores = ["item 1", "item 2", "item 3", "item 4"]
    return (
        <div className="container">
            <ul>
                {
                    // chores.map(chore =>  <ListItem fruit={"apple"} a={chore} b={chores}/>)

                    // these values which we are passing are called props . these are just values u may or maynot pass to a component

                    // so we can pass n no. of things using this syntax . so here we are passing the actual item which is been maped over and the array 
                    // so in the ListItem.js file the ListItem function the values variable receives an object of whatever you have passed
                    //so it looks like : p = {
                    //     fruit:"apple",
                    //     chore:"whatever it is",
                    //     chores:[]
                    // }

                    chores.map(chore =>  <ListItem a={chore}/>)
                }
            </ul>
        </div>
    );
}

export default Content; 
