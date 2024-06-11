import { P5Canvas, P5Wrapper } from "@ruipgsantos/p5-tools";
import P5 from "p5";

const init = (containerName: string) => {
    const sketch = (p5: P5) => {
        let cwrapper: P5Canvas;

        const res = 20;

        const cwidth = 250;
        const cheight = 250;

        p5.setup = () => {
            cwrapper = new P5Canvas({
                p5,
                width: cwidth,
                height: cheight,
                scale: res,
                parent: containerName,
            });

            p5.background("black");
            p5.frameRate(60);
        };

        p5.draw = () => {
            p5.background("black");
            p5.stroke('white');
            p5.circle(cwidth / 2, cheight / 2, 100);
        };

        return p5;
    };

    return sketch;
};

export default (containerName: string) => {
    return P5Wrapper(init, containerName);
};
