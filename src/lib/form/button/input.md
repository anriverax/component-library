# Input

---

### Input Props

| Attribute        | Type                                                                                                                                                                   | Default                               |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------- | --- |
| variant          | `flat` \| `underlined`                                                                                                                                                 | `flat`                                |
| color            | `default` \| `primary` \| `secondary` \| `success` \| `warning` \| `danger`                                                                                            | `default`                             |
| size             | `sm` \| `md` \| `lg`                                                                                                                                                   | `sm`                                  |
| labelPlacement   | `inside` \| `outside` \| `outside-left`                                                                                                                                | `inside`                              |
| fullWidth        | `boolean`                                                                                                                                                              | `true`                                |
| isDisabled       | `boolean`                                                                                                                                                              | `false`                               |
| radius           | `none` \| `sm` \| `md` \| `lg` \| `full`                                                                                                                               | -                                     |
| label            | `ReactNode`                                                                                                                                                            | -                                     |
| value            | `string`                                                                                                                                                               | -                                     |
| defaultValue     | `string`                                                                                                                                                               | -                                     |
| placeholder      | `string`                                                                                                                                                               | -                                     |
| description      | `ReactNode`                                                                                                                                                            | -                                     |
| errorMessage     | `ReactNode`                                                                                                                                                            | -                                     |
| isClearable      | `boolean`                                                                                                                                                              | `false`                               |
| isRequired       | `boolean`                                                                                                                                                              | `false`                               |
| isReadOnly       | `boolean`                                                                                                                                                              | -                                     |
| startContent     | `ReactNode`                                                                                                                                                            | -                                     |
| endContent       | `ReactNode`                                                                                                                                                            | -                                     |
| disableAnimation | `boolean`                                                                                                                                                              | Whether the input should be animated. | `false` | -   |
| classNames       | `Record<"base"｜ "label"｜ "inputWrapper"｜ "innerWrapper"｜ "mainWrapper" ｜ "input" ｜ "clearButton" ｜ "helperWrapper" ｜ "description" ｜ "errorMessage", string>` | -                                     |

### Input Events

| Attribute     | Type                                  | Description                                                                                                                         |
| ------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| onChange      | `React.ChangeEvent<HTMLInputElement>` | Handler that is called when the element's value changes. You can pull out the new value by accessing `event.target.value` (string). |
| onValueChange | `(value: string) => void`             | Handler that is called when the element's value changes.                                                                            |
| onClear       | `() => void`                          | Handler that is called when the clear button is clicked.                                                                            |
