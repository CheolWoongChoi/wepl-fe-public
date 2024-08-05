'use client';

import { Form } from '@ui/src/Form';
import TimeInputFormItem from '@ui/src/components/Form/TimeInputFormItem';
import DatePickerFormItem from '@ui/src/components/Form/DatePickFormItem';
import InputFormItem from '@ui/src/components/Form/InputFormItem';
import type { UseFormReturn } from 'react-hook-form';
import type { WeddingFormData } from '@/app/(sign-up)/user-info/wedding/page';

type WeddingInfoFormProps = {
  form: UseFormReturn<WeddingFormData>;
};

export const WeddingInfoForm = ({ form }: WeddingInfoFormProps) => {
  return (
    <Form {...form}>
      <form className="flex flex-col gap-[24px]">
        <DatePickerFormItem control={form.control} label="예식일" name="weddingDate" required />
        <div className="flex justify-between">
          <div className="flex-1">
            <TimeInputFormItem
              control={form.control}
              label="예식 시간"
              name="hour"
              placeholder="00시"
              range={[0, 23]}
              required
              unit="시"
            />
          </div>
          <div className="flex-1 pl-[16px] flex flex-col justify-end">
            <TimeInputFormItem control={form.control} name="min" placeholder="00분" range={[0, 59]} unit="분" />
          </div>
        </div>
        <InputFormItem control={form.control} label="예식장소" name="weddingHall" placeholder="예식장을 입력해주세요" />
      </form>
    </Form>
  );
};
