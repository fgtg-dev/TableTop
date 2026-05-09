import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import React from 'react';

const schema = z.object({
  x: z.coerce.number(), // Unknown (string) to number
  y: z.coerce.number(),
  cardinal: z
    .string()
    .transform((value) => value.toLowerCase())
    .pipe(
      z.enum([
        'north',
        'west',
        'south',
        'east',
      ])
    ),
});

type FormInput = z.input<typeof schema>;
type FormOutput = z.output<typeof schema>;

type BoardFormProps = {
  onChange: React.Dispatch<
    React.SetStateAction<string>
  >;
};

export default function BoardForm({ onChange }: BoardFormProps) {
  const {
    register,
    handleSubmit,
  } = useForm<FormInput, unknown, FormOutput>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormOutput) => {
    const boardFormData = `${data.x},${data.y} ${data.cardinal}`;
    onChange(boardFormData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        {...register('x')}
      />

      <input
        type="number"
        {...register('y')}
      />

      <input
        type="text"
        {...register('cardinal')}
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}