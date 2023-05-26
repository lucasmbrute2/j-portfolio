'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { FormHTMLAttributes } from 'react'
import { poppins } from '@/app/layout'

const contactMeSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
})

type ContactMeInputs = z.infer<typeof contactMeSchema>

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export function ContactMeForm({ ...rest }: FormProps) {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<ContactMeInputs>({
    resolver: zodResolver(contactMeSchema),
  })

  return (
    <form {...rest}>
      <div>
        <label
          className={`${poppins.className} mb-3 block text-secondary`}
          htmlFor="name"
        >
          Nome
        </label>
        <input
          className="mb-4 h-14 w-full rounded-sm border-none bg-[#D9D9D9] p-4 outline-none focus:ring-0"
          placeholder="nome completo"
          type="text"
          {...register('name')}
          id="name"
        />
        {errors?.name?.message && <p> {errors?.name.message} </p>}
      </div>
      <div>
        <label
          className={`${poppins.className} mb-3 block text-secondary`}
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="mb-4 h-14 w-full rounded-sm border-none bg-[#D9D9D9] p-4 outline-none focus:ring-0"
          placeholder="email@example.com"
          type="text"
          {...register('email')}
          id="email"
        />
        {errors?.email?.message && <p> {errors?.email.message} </p>}
      </div>
      <div>
        <label
          className={`${poppins.className} mb-3 block text-secondary`}
          htmlFor="phone"
        >
          Telefone
        </label>
        <input
          className="mb-4 h-14 w-full rounded-sm border-none bg-[#D9D9D9] p-4 outline-none focus:ring-0"
          placeholder="(00) 0 0000-0000"
          type="text"
          {...register('phone')}
          id="phone"
        />
        {errors?.phone?.message && <p> {errors?.phone.message} </p>}
      </div>

      <button
        className={`${poppins.className}  mx-auto my-5 block w-full max-w-[437px] rounded-sm border-none bg-cta-button p-2 text-center text-secondary hover:text-gray-100 lg:my-[60px] lg:text-xl`}
      >
        Quero entrar em contato
      </button>
    </form>
  )
}
