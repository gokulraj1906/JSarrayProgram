// function count(ele,arr2){
//     let c=0;
//     for(i=0;i<arr2.length;i++){
//         if(ele==arr2[i]){
//             c=c+1;
//         }
//     }
//     return c;
// }
// function Deduplicate(arr){
//     let arr3=[];
//     for(i=0;i<arr.length;i++){
//         let time=count(arr[i],arr);
//         if(time==1){
//         arr3.push(arr[i]);
//         }
//     }
//     console.log(arr3);
//     }
// Deduplicate([1,2,3,3,3,4]);




function interSection(arr1,arr2)
{
    let arr3=[];
    for(let i=0;i<arr1.length;i++)
    {
        for(let j=0;j<arr2.length;j++)
        {
            if(arr1[i]==arr2[j])
            {
                arr3.push(arr1[i]);
                break;
            }
        }
    }
    return arr3;
}
console.log(interSection([1,2,3,4,5],[2,1,4,5]));