import { of } from "rxjs";
import { mapTo } from "rxjs/operators";
const answer = of(6 * 9).pipe(mapTo(42));
answer.subscribe(res=>{
    console.log(res);//comment
})