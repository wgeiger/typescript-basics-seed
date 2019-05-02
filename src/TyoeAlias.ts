type Size = 'small'|'medium'|'large';
type Size2 = string;

let pixxaSize:Size = 'small';

const selectSize = (size:Size)=>{
       pixxaSize = size;
}

type Callback = (size: Size) => void;