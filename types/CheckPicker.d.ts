import * as React from 'react';

import { FormControlPickerProps } from './index';
import { SelectProps } from './SelectPicker';

export interface CheckPickerProps extends FormControlPickerProps<any[]>, SelectProps<any[]> {
  /** Top the selected option in the options */
  sticky?: boolean;

  /** A picker that can be counted */
  countable?: boolean;
}

declare const CheckPicker: React.ComponentType<CheckPickerProps>;

export default CheckPicker;
