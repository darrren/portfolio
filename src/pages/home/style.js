import styled from 'styled-components'

export const HomeContainer = styled.div`
  width:100%; height:100%;

  h1{
    margin-right:-8px;
    font-size:150px;
    line-height:0.77em;
    text-transform:uppercase;
    /* color:#5fe4e2; */
    background: #5fe4e2;
    background: -moz-linear-gradient(8deg,#5fe4e2 0%,#5fe4e2 30%,#e45fc0 80%,#e45fc0 100%);
    background: -webkit-linear-gradient(8deg,#5fe4e2 0%,#5fe4e2 30%,#e45fc0 80%,#e45fc0 100%);
    background: linear-gradient(8deg,#5fe4e2 0%,#5fe4e2 30%,#e45fc0 80%,#e45fc0 100%);
    /* background: -webkit-linear-gradient(8deg,#e45fc0 0%,#5fe4e2 33%,#e45fc0 66%,#5fe4e2 100%); */
    /* background: -moz-linear-gradient(8deg,#e45fc0 0%,#5fe4e2 33%,#e45fc0 66%,#5fe4e2 100%); */
    /* background: linear-gradient(8deg,#e45fc0 0%,#5fe4e2 33%,#e45fc0 66%,#5fe4e2 100%); */
    /* background-size:400% 400%; */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5fe4e2', endColorstr='#e45fc0',GradientType=1 );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    /* animation: gradientLoop 4.5s linear infinite; */

    @keyframes gradientLoop {
      0% {
          background-position: 100% 0%
      }
      100% {
          background-position: 25% 100%
      }
    }
  }
  h2{
    margin-right:-3px;
    font-size:50px;
    white-space:nowrap;
    line-height:0.9em;
    text-transform:uppercase;
    color:#fff;
  }
  h3{
    font-size:30px;
    line-height:0.9em;
    text-transform:uppercase;
    color:#fff;
  }
  .intro{
    text-align:right;
    position:absolute;
    top:50%; right:4%;
    margin-top:-88px;
    z-index:1;

    h1, h2, h3 {
      opacity:0;
    }

    small {
      font-weight:inherit;
    }
  }
}
`

export const Canvas = styled.canvas`
  position:absolute;
  bottom:0; left:0;
`
