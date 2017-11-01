import React from "react";
import OneTweet from "./OneTweet";
import TwitterCard from "./TwitterCard";

const pics = [
    'https://cdn.pixabay.com/photo/2017/06/19/07/12/water-lily-2418339__480.jpg',
    'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__480.jpg',
    'https://cdn.pixabay.com/photo/2017/07/14/17/44/frog-2504507__480.jpg',
    'https://cdn.pixabay.com/photo/2016/09/04/13/08/bread-1643951__480.jpg',
];
  
const idxStart = 0;

class TwitterScroll extends React.Component {
    // constructor(props) {
    //   super(props);
    // const idxStart = 0;
    //   this.state = {
    //     index: idxStart,
    //     next: this.getNextIndex(idxStart),
    //     move: false,
    //   };
    // }

    state = {
        index: idxStart,
        // next: this.getNextIndex(idxStart),

        // wanna have an array to start with, not a single index
        // an array with 10 positions
        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] ... only seven are shown at a time

        // use the modulus/modulous? : 1%9
        move: false,
        subby: []
    }



    loopArr(){
        var i = 0;
        setInterval( ()=> {
            // console.log(pics[i++ % 4]);
            // recreate the array every time the interval is called
        
            var arr = [];
            for(var y = 0; y < 7; ++y){
                arr.push(pics[(i + y) % pics.length]);
            }

            i++;
            this.setState({subby: arr, index: i});
            //console.log(this.state.subby);
        }, 3500);
    }
    
    // getNextIndex(idx) {
    //   if (idx >= pics.length - 1) {
    //     return 0;
    //   }
    //   return idx + 1;
    // }
  
    // setIndexes(idx) {
    //   this.setState({
    //     index: idx,
    //     next: this.getNextIndex(idx)
    //   });
    // }

    componentDidMount() {
      
        this.loopArr();

    //  setInterval(() => {
    //     // on
    //     this.setState({
    //       move: true
    //     });
    //     // off
    //     setTimeout(() => {
    //       this.setState({
    //         move: false
    //       });
    //       this.setIndexes(this.getNextIndex(this.state.index));
    //     }, 500); // same delay as in the css transition here
       
    //   }, 2000);
    }

    render() {
      const move = this.state.move ? 'move' : '';
      
      if (this.state.move) {
        
      }
      //console.log('renders', this.state.subby)
      return (
        // <div className="mask">
        //   <div className="pic-wrapper">
        //     <div className={`current pic ${move}`}>
        //       {this.state.index}
        //       <img src={pics[this.state.index]} alt="" />
        //     </div>
        //     <div className={`next pic ${move}`}>
        //       {this.state.next}
        //       <img src={pics[this.state.next]} alt="" />
        //     </div>
        //   </div>
        // </div>
        <div>
            {this.state.subby.map((tweet, index) =>{
                console.log('index', index, 'tweet', tweet);
                return <TwitterCard key={ index } tweet={ tweet } />;}
            )}
        </div>
        // <div>
        //     {this.state.index}
        // </div>
      );
    }
  }
  
//   React.render(<App />, document.getElementById('root'));
export default TwitterScroll;