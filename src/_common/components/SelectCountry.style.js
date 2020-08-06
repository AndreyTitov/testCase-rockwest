import styled from 'styled-components';

export const SelectCountryContainer = styled.div`
     max-width: 350px; 
     margin: 0 auto;
     position: relative;
`;

export const SelectCountrySelector = styled.div`
        padding: 16px 0;
        border-radius: 6px;
        text-align: center;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
        cursor: pointer;
        position: relative;
        
        .fa {
            position: absolute;
            right: 10px;
            color: rgba(0,0,0,0.5);
        }
`;

export const SelectCountryList = styled.div`
    position: absolute;
    top: 70px;
    left: 0;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    border-radius: 10px;
    animation: fadeIn .5s ease;

    ul {
        margin: 0;
        padding: 0;
        max-height: 350px;
        overflow-y: scroll;  
        background: #fff;
        
        &::-webkit-scrollbar-track {
            background-color: #eee;
        }
        
        &::-webkit-scrollbar {
            width: 6px;
            background-color: #000;
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: rgba(0,0,0,0.7);
            border-radius: 6px;
        }  
            
        li {
            list-style-type: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            cursor: pointer;
            border-bottom: 1px solid rgba(0,0,0,0.5);
            
            &:last-child {
                border-bottom: none;
            }
            
            &:hover {
                background: #ebebeb;
            }
            
            .country-item {
                &-image {
                    width: 20%;
                    
                    img {
                        width: 100%;
                    }  
                }
                
                &-name {
                    width: 78%;
                }
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }
`;
