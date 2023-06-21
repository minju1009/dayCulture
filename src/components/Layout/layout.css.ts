import {style} from '@vanilla-extract/css';


export const navContainer = style({
    display: 'flex',
    alignItems:'center',
    justifyContent: 'space-between',
    padding: '0 10px'
})

export const navMenu = style({
    fontSize: '25px',
    color: 'black',
    cursor: 'pointer',
})

export const mainContainer = style({
    flex: 1,
})