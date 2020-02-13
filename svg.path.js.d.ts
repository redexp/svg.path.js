declare module "@svgdotjs/svg.js" {
    interface PathPoint {
        x: number;
        y: number;
    }

    type Movement = 'M'|'m'|'L'|'l'|'H'|'h'|'V'|'v'|'C'|'c'|'S'|'s'|'Q'|'q'|'T'|'t'|'A'|'a'|'Z';

    interface Segment {
        type: Movement;
        coords: number[];
    }

    interface Path {
        M(point: PathPoint): this;
        M(x: number, y: number): this;
        m(point: PathPoint): this;
        m(x: number, y: number): this;
        L(point: PathPoint): this;
        L(x: number, y: number): this;
        l(point: PathPoint): this;
        l(x: number, y: number): this;
        H(x: number): this;
        h(x: number): this;
        V(y: number): this;
        v(y: number): this;
        C(p1: PathPoint, p2: PathPoint, p: PathPoint): this;
        C(x1: number, y1: number, x2: number, y2: number, x: number, y: number): this;
        c(p1: PathPoint, p2: PathPoint, p: PathPoint): this;
        c(x1: number, y1: number, x2: number, y2: number, x: number, y: number): this;
        S(p2: PathPoint, p: PathPoint): this;
        S(x2: number, y2: number, x: number, y: number): this;
        s(p2: PathPoint, p: PathPoint): this;
        s(x2: number, y2: number, x: number, y: number): this;
        Q(p1: PathPoint, p: PathPoint): this;
        Q(x1: number, y1: number, x: number, y: number): this;
        q(p1: PathPoint, p: PathPoint): this;
        q(x1: number, y1: number, x: number, y: number): this;
        T(p: PathPoint): this;
        T(x: number, y: number): this;
        t(p: PathPoint): this;
        t(x: number, y: number): this;
        A(rx: number, ry: number, xAxisRotation: number, largeArcFlag: 0|1, sweepFlag: 0|1, p: PathPoint): this;
        A(rx: number, ry: number, xAxisRotation: number, largeArcFlag: 0|1, sweepFlag: 0|1, x: number, y: number): this;
        a(rx: number, ry: number, xAxisRotation: number, largeArcFlag: 0|1, sweepFlag: 0|1, p: PathPoint): this;
        a(rx: number, ry: number, xAxisRotation: number, largeArcFlag: 0|1, sweepFlag: 0|1, x: number, y: number): this;
        Z(): this;
        clear(): this;
        addSegment(movement: Movement, coordinates: Array<number>, redraw?: boolean): this;
        getSegmentCount(): number;
        getSegment(index: number): Segment;
        removeSegment(index: number): this;
        replaceSegment(index: number, segment: Segment): this;
        drawAnimated(options?: DrawAnimatedOptions): this;
        update(redraw: boolean): this;
        redraw(): this;
    }

    interface DrawAnimatedOptions {
        duration?: number;
        easing?: '<>'|'>'|'<'|'-'|'='|'quadIn'|'quadOut'|'quadInOut'|'cubicIn'|'cubicOut'|'cubicInOut'|'quartIn'|'quartOut'|'quartInOut'|'quintIn'|'quintOut'|'quintInOut'|'sineIn'|'sineOut'|'sineInOut'|'expoIn'|'expoOut'|'expoInOut'|'circIn'|'circOut'|'circInOut'|'backIn'|'backOut'|'backInOut'|'swingFromTo'|'swingFrom'|'swingTo'|'bounce'|'bounceOut'|'elastic';
        delay?: number;
    }
}