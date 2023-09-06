import { createStore, createHook } from "react-sweet-state"
import Color from "color"

const randomColor = (darkenRatio = 0.4) => {
    const color = Color.rgb([0, 0, 0].map(() => Math.round(Math.random() * 255)));
    return color.darken(color.isLight ? darkenRatio : 0.0).string();
};

export const Store = createStore({
    initialState: {
        bgColor: randomColor()
    },
    actions: {
        change: (darkenRatio = 0.4) => ({ setState }) => { setState({ bgColor: randomColor(darkenRatio) }) }
    },
    name: "bgColor"
})

export const useBgColor = createHook(Store)