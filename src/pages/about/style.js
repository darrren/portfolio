import styled from 'styled-components'

export const AboutContainer = styled.div`
    min-height:100%;
    /* background:url(../assets/about-bg.png) repeat; */
    background-color:#1a1d24;

    h2 {
        text-transform:uppercase;
        /* color:#3b3b3b; */
        color:#fff;
    }

    h3 {
        /* color:#3b3b3b; */
        color:#fff;
    }

    .intro {
        text-align: justify;
    }

    .technicalSkills {
        .progress {
            position:relative;
            height:1px;
            background-color:rgba(255, 255, 255, 0.3);
            overflow:visible;

            .progress-bar {
                /* background-color:#fff; */
                /* opacity:0.5; */
                width:0;
                transition:0.5s;
                box-shadow:0 0 10px 1px rgba(95, 228, 226, 0.15);

                background: #5fe4e2;
                background: -moz-linear-gradient(8deg,#5fe4e2 0%,#5fe4e2 30%,#e45fc0 80%,#e45fc0 100%);
                background: -webkit-linear-gradient(8deg,#5fe4e2 0%,#5fe4e2 30%,#e45fc0 80%,#e45fc0 100%);
                background: linear-gradient(8deg,#5fe4e2 0%,#5fe4e2 30%,#e45fc0 80%,#e45fc0 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5fe4e2', endColorstr='#e45fc0',GradientType=1 );
                /* -webkit-background-clip: text; */
                /* background-clip: text; */
                /* -webkit-text-fill-color: transparent; */

                &:hover {
                    /* opacity:1; */
                }

                span {
                    position:absolute;
                    bottom:3px; right:0;
                    color:#5b5b5b;
                }
            }
        }
    }

    .experience {

        ul {

            li {
                border-top:1px solid rgba(255, 255, 255, 0.3);;
                /* border-bottom:1px solid #d0d0d0; */

                &:first-child {
                    border-top:0;
                }
                &:last-child {
                    border-bottom:0;
                }

                &.current {
                    p {
                        opacity:1;
                    }
                }

                p {
                    opacity:0.4;
                }

                .highlight {
                    animation:glow 1s forwards infinite;
                    text-shadow:0 0 0 rgba(95, 228, 226, 1);

                    @keyframes glow {
                        0% {
                            text-shadow:0 0 0px rgba(95, 228, 226, 1);
                        }
                        50% {
                            text-shadow:0 0 10px rgba(95, 228, 226, 1);
                        }
                        100% {
                            text-shadow:0 0 0px rgba(95, 228, 226, 1);
                        }
                    }
                }
            }
        }
    }
`
