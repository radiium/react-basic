export const size0 = '0' as const;
export const size1 = '1' as const;
export const size2 = '2' as const;
export const size3 = '3' as const;
export const size4 = '4' as const;
export const size5 = '5' as const;
export const size6 = '6' as const;
export const size7 = '7' as const;
export const size8 = '8' as const;
export const size9 = '9' as const;
export const Sizes0To1 = [size0, size1] as const;
export const Sizes1To2 = [size1, size2] as const;
export const Sizes1To3 = [size1, size2, size3] as const;
export const Sizes1To4 = [size1, size2, size3, size4] as const;
export const Sizes1To5 = [size1, size2, size3, size4, size5] as const;
export const Sizes1To9 = [size1, size2, size3, size4, size5, size6, size7, size8, size9] as const;
// prettier-ignore
export const Sizes0To9 = [size0, size1, size2, size3, size4, size5, size6, size7, size8, size9] as const;
export const Colors = ['neutral', 'primary', 'blue', 'green', 'yellow', 'orange', 'red'] as const;
export const Variants = ['solid', 'soft', 'outline', 'clear'] as const;
export const VariantsBadge = ['solid', 'soft', 'outline'] as const;
export const Weights = ['light', 'regular', 'medium', 'bold'] as const;
export const Margins = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my'] as const;
export const Paddings = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py'] as const;
export const Aligns = ['start', 'center', 'end'] as const;
export const Displays = ['none', 'inline-flex', 'flex'] as const;
// prettier-ignore
export const Justifys = ['start', 'center', 'end', 'around', 'between', 'evenly', 'normal'] as const;
export const Directions = ['row', 'column', 'row-reverse', 'column-reverse'] as const;
export const AlignItems = ['start', 'center', 'end', 'baseline', 'stretch', 'normal'] as const;
export const Wraps = ['nowrap', 'wrap', 'wrap-reverse'] as const;
export const Gaps = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
export const Grows = ['0', '1'] as const;
export const Shrinks = ['0', '1'] as const;
// prettier-ignore
export const InputTypes = ['number', 'time', 'text', 'search', 'password', 'email', 'tel', 'url', 'date',	'datetime-local', 'month', 'week'] as const;
export const TextTags = ['div', 'span', 'label', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'] as const;

// prettier-ignore
const marginValues = ['auto', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9'] as const;
export interface MarginProps {
    m?: (typeof marginValues)[number];
    mx?: (typeof marginValues)[number];
    my?: (typeof marginValues)[number];
    mt?: (typeof marginValues)[number];
    mr?: (typeof marginValues)[number];
    mb?: (typeof marginValues)[number];
    ml?: (typeof marginValues)[number];
}
export function extractMarginProps<T extends MarginProps>(props: T) {
    const { m, mx, my, mt, mr, mb, ml, ...rest } = props;
    return { m, mx, my, mt, mr, mb, ml, rest };
}

export function extractMarginPropsClass<T extends MarginProps>(props: T) {
    const allowed = ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml'];
    return Object.keys(props)
        .filter((key: string) => allowed.includes(key))
        .map((key) => `${key}-${props[key as keyof MarginProps]}`)
        .join(' ');
}

const paddingValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
export interface PaddingProps {
    p?: (typeof paddingValues)[number];
    px?: (typeof paddingValues)[number];
    py?: (typeof paddingValues)[number];
    pt?: (typeof paddingValues)[number];
    pr?: (typeof paddingValues)[number];
    pb?: (typeof paddingValues)[number];
    pl?: (typeof paddingValues)[number];
}
export function extractPaddingProps<T extends PaddingProps>(props: T) {
    const { p, px, py, pt, pr, pb, pl, ...rest } = props;
    return { p, px, py, pt, pr, pb, pl, rest };
}
export function extractPaddingPropsClass<T extends PaddingProps>(props: T) {
    const allowed = ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl'];
    return Object.keys(props)
        .filter((key: string) => allowed.includes(key))
        .map((key) => `${key}-${props[key as keyof PaddingProps]}`)
        .join(' ');
}

const positionValues = ['static', 'relative', 'absolute', 'fixed', 'sticky'] as const;
const positionEdgeValues = ['auto', '0', '50%', '100%'] as const;
// prettier-ignore
const widthHeightValues = ['auto', 'min-content', 'max-content', '100%', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const flexShrinkValues = ['0', '1'] as const;
const flexGrowValues = ['0', '1'] as const;
export interface LayoutProps {
    position?: (typeof positionValues)[number];
    inset?: (typeof positionEdgeValues)[number];
    top?: (typeof positionEdgeValues)[number];
    right?: (typeof positionEdgeValues)[number];
    bottom?: (typeof positionEdgeValues)[number];
    left?: (typeof positionEdgeValues)[number];
    width?: (typeof widthHeightValues)[number];
    height?: (typeof widthHeightValues)[number];
    shrink?: (typeof flexShrinkValues)[number];
    grow?: (typeof flexGrowValues)[number];
}

export function extractLayoutProps<T extends LayoutProps>(props: T) {
    const {
        position, //
        width,
        height,
        inset,
        top,
        bottom,
        left,
        right,
        shrink,
        grow,
        ...rest
    } = props;
    return {
        position,
        width,
        height,
        inset,
        top,
        bottom,
        left,
        right,
        shrink,
        grow,
        rest,
    };
}

type CleanableProps = Partial<PaddingProps & MarginProps & LayoutProps>;
export function cleanProps<T extends CleanableProps>(props: T) {
    const copy = { ...props };
    delete copy.m;
    delete copy.mx;
    delete copy.my;
    delete copy.mt;
    delete copy.mr;
    delete copy.mb;
    delete copy.ml;
    delete copy.p;
    delete copy.px;
    delete copy.py;
    delete copy.pt;
    delete copy.pr;
    delete copy.pb;
    delete copy.pl;
    delete copy.position;
    delete copy.width;
    delete copy.height;
    delete copy.inset;
    delete copy.top;
    delete copy.bottom;
    delete copy.left;
    delete copy.right;
    delete copy.shrink;
    delete copy.grow;
    return copy;
}
