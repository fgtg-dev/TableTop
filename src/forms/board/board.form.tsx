import React from 'react';
import {
  Controller,
  useForm,
} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

import NumberField from './board-form-number.field';

import { CARDINAL_DIRECTIONS } from '../../constants/cardinal.constant';

const schema = z.object({
  x: z.coerce
    .number<number>({
      error: 'X Axis is required',
    })
    .min(0, 'Minimum value is 0')
    .max(4, 'Maximum value is 4'),

  y: z.coerce
    .number<number>({
      error: 'Y Axis is required',
    })
    .min(0, 'Minimum value is 0')
    .max(4, 'Maximum value is 4'),

  cardinal: z.enum(
    ['north', 'south', 'east', 'west'],
    {
      error: 'Please select a direction',
    }
  ),
});

type FormValues = z.infer<typeof schema>;

type BoardFormProps = {
  onChange: React.Dispatch<
    React.SetStateAction<string>
  >;
};

export default function BoardForm({
  onChange,
}: BoardFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),

    mode: 'onChange',

    defaultValues: {
      x: 0,
      y: 0,
      cardinal: 'north',
    },
  });

  const onSubmit = (
    data: FormValues
  ) => {
    const boardFormData =
      `${data.x},${data.y} ${data.cardinal}`;

    onChange(boardFormData);
  };

  return (
    <Stack
      component="form"
      spacing={2}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        width: {
          xs: '100%',
          sm: '360px',
        },
      }}
    >
      <Controller
        name="x"
        control={control}
        render={({ field }) => (
          <NumberField
            label="X Axis"
            size="small"
            value={field.value ?? ''}
            onValueChange={field.onChange}
            onBlur={field.onBlur}
            error={!!errors.x}
            helperText={errors.x?.message}
          />
        )}
      />

      <Controller
        name="y"
        control={control}
        render={({ field }) => (
          <NumberField
            label="Y Axis"
            size="small"
            value={field.value ?? ''}
            onValueChange={field.onChange}
            onBlur={field.onBlur}
            error={!!errors.y}
            helperText={errors.y?.message}
          />
        )}
      />

      <Controller
        name="cardinal"
        control={control}
        render={({ field }) => (
          <FormControl
            fullWidth
            size="small"
            error={!!errors.cardinal}
          >
            <InputLabel>
              Cardinal Direction
            </InputLabel>

            <Select
              label="Cardinal Direction"
              {...field}
            >
              {CARDINAL_DIRECTIONS.map(
                (direction) => (
                  <MenuItem
                    key={direction}
                    value={direction.toLowerCase()}
                  >
                    {direction}
                  </MenuItem>
                )
              )}
            </Select>

            <FormHelperText>
              {errors.cardinal?.message}
            </FormHelperText>
          </FormControl>
        )}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={!isValid}
      >
        Submit
      </Button>
    </Stack>
  );
}