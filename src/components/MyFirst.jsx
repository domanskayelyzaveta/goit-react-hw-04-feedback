// export class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = event => {
//     const { name } = event.currentTarget;

//     switch (name) {
//       case 'good':
//         this.setState(prevState => ({ good: prevState.good + 1 }));
//         break;
//       case 'neutral':
//         this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
//         break;
//       case 'bad':
//         this.setState(prevState => ({ bad: prevState.bad + 1 }));
//         break;
//     }
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     const positive = Math.floor(total !== 0 ? (good / total) * 100 : 0);
//     return (
//       <div>
//         <h2>Please leave your feedback</h2>
//         <button type="button" name="good" onClick={this.onLeaveFeedback}>
//           Good
//         </button>
//         <button type="button" name="neutral" onClick={this.onLeaveFeedback}>
//           Neutral
//         </button>
//         <button type="button" name="bad" onClick={this.onLeaveFeedback}>
//           Bad
//         </button>
//         <h3>Statistics</h3>
//         <p>Good:{good}</p>
//         <p>Neutral:{neutral}</p>
//         <p>Bad:{bad}</p>
//         <p>Total: {total}</p>
//         <p>Positive feedback: {positive}%</p>
//       </div>
//     );
//   }
// }
