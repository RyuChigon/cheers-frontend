import styled from 'styled-components';

export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export const Expand = styled.img`
  width: 48px;
  height: 24px;
  cursor: pointer;
  position: relative;
  top: 2.5px;
  z-index: 3;
`;

export const NotExpand = styled.img`
  width: 14;
  height: 9;
  cursor: pointer;
  position: relative;
  top: 10;
  z-index: 3;
`;

export const ExpandField = styled.div`
  width: 300px;
  height: 200px;
  // margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  opacity: 0.5;
  border: transparent;
  border-radius: 18px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  overflow: auto;
  overflow-x: hidden;
  padding-bottom: 40px;
  padding-top: 30px;

  position: relative;
  top: 59px;
  // left: 20px;
  z-index: 2;
`;

export const ChatContent = styled.div`
  width: 300px;
  height: 35px;
  margin: 0;
  display: flex;
  align-items: center;
  background: #ffffff;
  border: transparent;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
  z-index: 4;
`;

export const Input = styled.input`
  width: 230px;
  height: 30px;
  margin-left: 20px;
  margin-right: 15px;
  background: #ffffff;
  border: transparent;
  font-size: 0.9rem;

  ::-webkit-input-placeholder {
    color: #b7b7b7;
  }

  &:focus {
    outline: none;
  }

  z-index: 5;
`;

export const Output = styled.input`
  width: 200px;
  height: 100px;
  margin-left: 20px;
  margin-right: 15px;
  background: #ffffff;
  border: transparent;
  font-size: 0.9rem;

  ::-webkit-input-placeholder {
    color: #b7b7b7;
  }

  &:focus {
    outline: none;
  }

  z-index: 10;
`;

export const Enter = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 6;
`;

export const Balloon_me = styled.div`
  position: relative;
  margin: 5px 10px 5px 10px;
  width: 280px;
  // height: 50px;
  background: #333333;
  border-radius: 10px;
  color: #ffffff;

  z-index: 20;
`;

export const Balloon_a = styled.div`
  position: relative;
  margin: 5px 10px 5px 10px;
  width: 280px;
  // height: 50px;
  background: orange;
  border-radius: 10px;
  color: #ffffff;

  z-index: 20;
`;

export const Balloon_b = styled.div`
  position: relative;
  margin: 5px 10px 5px 10px;
  width: 280px;
  // height: 50px;
  background: navy;
  border-radius: 10px;
  color: #ffffff;

  z-index: 20;
`;

// .chat_wrap { border:1px solid #999; width:300px; padding:5px; font-size:13px; color:#333}
// .chat_wrap .inner{background-color:#acc2d2; border-radius:5px; padding:10px; overflow-y:scroll;height: 400px;}
// .chat_wrap .item{margin-top:15px}
// .chat_wrap .item:first-child{margin-top:0px}
// .chat_wrap .item .box{display:inline-block; max-width:180px; position:relative}
// .chat_wrap .item .box::before{content:""; position:absolute; left:-8px; top:9px; border-top:0px solid transparent; border-bottom:8px solid transparent;border-right:8px solid #fff;}
// .chat_wrap .item .box .msg {background:#fff; border-radius:10px; padding:8px; text-align:left}
// .chat_wrap .item .box .time {font-size:11px; color:#999; position:absolute; right: -75px; bottom:5px; width:70px}
// .chat_wrap .item.mymsg{text-align:right}
// .chat_wrap .item.mymsg .box::before{left:auto; right:-8px; border-left:8px solid #fee600; border-right:0;}
// .chat_wrap .item.mymsg .box .msg{background:#fee600}
// .chat_wrap .item.mymsg .box .time{right:auto; left:-75px}
// .chat_wrap .item .box{transition:all .3s ease-out; margin:0 0 0 20px;opacity:0}
// .chat_wrap .item.mymsg .box{transition:all .3s ease-out; margin:0 20px 0 0;}
// .chat_wrap .item.on .box{margin:0; opacity: 1;}

// input[type="text"]{border:0; width:100%;background:#ddd; border-radius:5px; height:30px; padding-left:5px; box-sizing:border-box; margin-top:5px}
// input[type="text"]::placeholder{color:#999}
