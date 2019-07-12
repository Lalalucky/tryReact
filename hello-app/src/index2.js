import React from "react";
import ReactDOM from "react-dom";
// 与运算符
// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h2>Hello!</h2>
//             {unreadMessages.length > 0 && (
//                 <h2>you have {unreadMessages.length} unread messags.</h2>
//             )}
//         </div>
//     );
// }

// const messags = ["React", "Re:React", "Re:Re:React"];
// ReactDOM.render(
//     <Mailbox unreadMessages={messags} />,
//     document.getElementById("root"),
// );
// 阻止组件渲染
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return <div className="warning">Warning!</div>;
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning,
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? "Hide" : "Show"}
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById("root"));
