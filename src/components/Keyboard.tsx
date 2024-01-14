import { CSSProperties, ReactNode } from 'react';
import { BsShiftFill } from 'react-icons/bs';
import { FaBackspace } from 'react-icons/fa';

export interface Props {}

const deviceWidth = 430; // iPhone 15 Pro Max
const maxKeysPerRow = 10;
const gap = 5;
const keyHeight = 44;
const availableWidth = deviceWidth - (maxKeysPerRow - 1) * gap - 2 * gap;
const keyWidth = availableWidth / maxKeysPerRow;
const slightlyBiggerKeyWidth = keyWidth + 9;

enum SpecialKey {
  backspace,
  space,
  intro,
  shift,
  empty,
}

type Key = string | { id: SpecialKey; label: ReactNode; style: CSSProperties };

const qwertyArray: Key[][] = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'],
  [
    {
      id: SpecialKey.shift,
      label: <BsShiftFill />,
      style: { width: slightlyBiggerKeyWidth, marginRight: 'auto' },
    },
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    {
      id: SpecialKey.backspace,
      label: <FaBackspace />,
      style: { width: slightlyBiggerKeyWidth, marginLeft: 'auto' },
    },
  ],
  [
    { id: SpecialKey.empty, label: '', style: { flexGrow: 1 } },
    { id: SpecialKey.space, label: 'Espacio', style: { flexGrow: 2.5 } },
    { id: SpecialKey.intro, label: 'Intro', style: { flexGrow: 1 } },
  ],
  [
    { id: SpecialKey.empty, label: '', style: { flexGrow: 1 } },
    { id: SpecialKey.space, label: 'libre', style: { flexGrow: 1 } },
    { id: SpecialKey.empty, label: '- Cant.', style: { flexGrow: 1 } },
    { id: SpecialKey.empty, label: '+ Cant.', style: { flexGrow: 1 } },
  ],
] as const;

export default function Keyboard() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.value);
  };

  return (
    <div className="flex flex-col fixed top-[388px] left-0 right-0">
      {qwertyArray.map((row, i) => (
        <div
          key={i}
          style={{ padding: `0 ${gap}px` }}
          className="flex gap-[5px] [&>*]:h-[44px] mb-[12px] justify-center"
        >
          {row.map((key, j) => (
            <button
              key={j}
              value={typeof key === 'string' ? key : key.id}
              style={{
                width: keyWidth,
                height: keyHeight,
                ...(typeof key !== 'string' ? key.style : {}),
              }}
              onClick={handleClick}
              className="bg-[#6c6c6d] text-[#fff] rounded-[5px] flex items-center justify-center text-[24px] leading-none"
            >
              {typeof key === 'string' ? key : key.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
