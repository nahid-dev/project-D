'use client';

import React from 'react';
import ReactSelect, { CSSObjectWithLabel, StylesConfig } from 'react-select';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  isDisabled?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  isDisabled = false,
  isClearable = false,
  isSearchable = true,
}) => {
  const selectedOption = options.find((opt) => opt.value === value) || null;

  // CSS Variables from the theme
  const cssVariables = getComputedStyle(document.documentElement);
  const isDark = document.documentElement.classList.contains('dark');

  // Get theme colors and radius
  const primary = getCSSVariable('--primary', isDark ? '#ff5252' : '#ff5252'); // Primary red
  const foreground = getCSSVariable('--foreground', isDark ? '#fafafa' : '#000000');
  const background = getCSSVariable('--background', isDark ? '#0f0a0a' : '#ffffff');
  const mutedForeground = getCSSVariable('--muted-foreground', isDark ? '#a1a1a1' : '#666666');
  const border = getCSSVariable('--border', isDark ? '#333333' : '#e5e7eb');
  const input = getCSSVariable('--input', isDark ? '#1a1a1a' : '#ffffff');
  const radius = getCSSVariable('--radius', '10px'); // 0.625rem = 10px

  const customStyles: StylesConfig<Option, false> = {
    control: (base: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...base,
      backgroundColor: input,
      borderColor: border,
      color: foreground,
      minHeight: '40px',
      borderRadius: radius,
      borderWidth: '1px',
      cursor: 'pointer',
      transition: 'all 200ms',
      '&:hover': {
        borderColor: primary,
      },
      '&:focus-within': {
        borderColor: primary,
        boxShadow: `0 0 0 2px ${primary}33`,
      },
    }),
    input: (base: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...base,
      color: foreground,
      caretColor: primary,
    }),
    placeholder: (base: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...base,
      color: mutedForeground,
    }),
    singleValue: (base: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...base,
      color: foreground,
    }),
    option: (
      base: CSSObjectWithLabel,
      state: any
    ): CSSObjectWithLabel => ({
      ...base,
      backgroundColor: state.isFocused ? primary : background,
      color: state.isFocused ? '#ffffff' : foreground,
      cursor: 'pointer',
      borderRadius: '4px',
      ':active': {
        backgroundColor: primary,
      },
    }),
    menu: (base: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...base,
      backgroundColor: background,
      border: `1px solid ${border}`,
      borderRadius: radius,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      zIndex: 20,
    }),
    menuList: (base: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...base,
      maxHeight: '300px',
      padding: '4px 0',
      borderRadius: radius,
    }),
    indicatorSeparator: (base: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...base,
      backgroundColor: border,
    }),
    dropdownIndicator: (base: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...base,
      color: mutedForeground,
      '&:hover': {
        color: foreground,
      },
    }),
  };

  return (
    <ReactSelect
      options={options}
      value={selectedOption}
      onChange={(option) => onChange(option?.value || '')}
      styles={customStyles}
      placeholder={placeholder}
      isDisabled={isDisabled}
      isClearable={isClearable}
      isSearchable={isSearchable}
      classNamePrefix="custom-select"
    />
  );
};

function getCSSVariable(name: string, fallback: string): string {
  if (typeof document === 'undefined') return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  if (!value) return fallback;

  // Convert HSL to hex for react-select compatibility
  if (value.startsWith('hsl')) {
    return hslToHex(value);
  }
  
  // Handle rem/em units
  if (value.includes('rem') || value.includes('em')) {
    const numValue = parseFloat(value);
    const pxValue = numValue * 16; // assuming 16px base font size
    return `${pxValue}px`;
  }
  
  return value;
}

function hslToHex(hsl: string): string {
  const match = hsl.match(/hsl\((\d+)\s+(\d+)%\s+(\d+)%\)/);
  if (!match) return '#ff5252';

  let h = parseInt(match[1]);
  let s = parseInt(match[2]) / 100;
  let l = parseInt(match[3]) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r: number, g: number, b: number;

  if (h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }

  const toHex = (n: number) => {
    const hex = Math.round((n + m) * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export default CustomSelect;
