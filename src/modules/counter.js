// 액션 타입 생성
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


// 액션 생성 함수
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});


// 초기 상태 선언
const initialState = 0



// 리듀서 선언
export default function counter(state = initialState, action){
    switch(action.type){
        case INCREASE:
            return state + 1
        case DECREASE:
            return state - 1
        default:
            return state;
    }
}


