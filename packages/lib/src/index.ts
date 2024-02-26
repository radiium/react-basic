import './style.scss';

// Components
import Accordion from './components/Accordion';
import Badge from './components/Badge';
import Button from './components/Button';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import Dialog from './components/Dialog';
import Flex from './components/Flex';
import Input from './components/Input';
import Portal from './components/Portal';
import Radio from './components/Radio';
import Range from './components/Range';
import Select from './components/Select';
import Switch from './components/Switch';
import Text from './components/Text';
import Textarea from './components/Textarea';
import ThemeProvider, { useThemeContext } from './components/Theme';

export {
    Accordion,
    Badge,
    Button,
    Card,
    Checkbox,
    Dialog,
    Flex,
    Input,
    Portal,
    Radio,
    Range,
    Select,
    Switch,
    Text,
    Textarea,
    ThemeProvider,
};

// Hooks
import useArray from './hooks/useArray';
import useOpenClose from './hooks/useOpenClose';
export { useArray, useOpenClose, useThemeContext };

export * from './constants';

// Components
import type { AccordionProps, AccordionHeaderProps } from './components/Accordion';
import type { BadgeProps, BadgeRef } from './components/Badge';
import type { ButtonProps, ButtonRef } from './components/Button';
import type { CardProps, CardRef } from './components/Card';
import type { CheckboxProps, CheckboxRef } from './components/Checkbox';
import type { DialogProps, DialogRef } from './components/Dialog';
import type { FlexProps, FlexRef } from './components/Flex';
import type { InputProps, InputRef } from './components/Input';
import type { PortalProps } from './components/Portal';
import type { RadioProps, RadioRef } from './components/Radio';
import type { RangeProps, RangeRef } from './components/Range';
import type { SelectProps, SelectRef, SelectOption } from './components/Select';
import type { SwitchProps, SwitchRef } from './components/Switch';
import type { TextProps, TextRef } from './components/Text';
import type { TextareaProps, TextareaRef } from './components/Textarea';
import type {
    ThemeProps,
    ThemeStrategyType,
    ThemeSchemeType,
    ThemeContextType,
} from './components/Theme';

export type {
    AccordionProps,
    AccordionHeaderProps,
    BadgeProps,
    BadgeRef,
    ButtonProps,
    ButtonRef,
    CardProps,
    CardRef,
    CheckboxProps,
    CheckboxRef,
    DialogProps,
    DialogRef,
    FlexProps,
    FlexRef,
    InputProps,
    InputRef,
    PortalProps,
    RadioProps,
    RadioRef,
    RangeProps,
    RangeRef,
    SelectProps,
    SelectRef,
    SelectOption,
    SwitchProps,
    SwitchRef,
    TextProps,
    TextRef,
    TextareaProps,
    TextareaRef,
    ThemeProps,
    ThemeStrategyType,
    ThemeSchemeType,
    ThemeContextType,
};
