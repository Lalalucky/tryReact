import React from "react";
import ReactDOM from "react-dom";
//利用map来遍历
/**
 *
 * 记住加上key；
 * 还有放在render（）里面进行map,jsx需要加上{}
 */
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map(number => (
//         <li key={number.toString()}>{number}</li>
//     ));
//     return <ul>{listItems}</ul>;
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById("root"),
// );

function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    return (
        <div>
            <ul>
                {numbers.map(number => (
                    <ListItem key={number.toString()} value={number} />
                ))}
            </ul>
        </div>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById("root"),
);
