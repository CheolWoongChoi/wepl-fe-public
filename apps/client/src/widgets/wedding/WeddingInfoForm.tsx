'use client';

import { Form } from '@ui/src/Form';
import TimeInputFormItem from '@ui/src/components/Form/TimeInputFormItem';
import DatePickerFormItem from '@ui/src/components/Form/DatePickFormItem';
import InputFormItem from '@ui/src/components/Form/InputFormItem';
import { UseFormReturn } from 'react-hook-form';
import { WeddingFormData } from '@/app/(sign-up)/user-info/wedding/page';

type WeddingInfoFormProps = {
  form: UseFormReturn<WeddingFormData>;
};

export function WeddingInfoForm({ form }: WeddingInfoFormProps) {
  return (
    <Form {...form}>
      <form className="flex flex-col gap-[24px]">
        <DatePickerFormItem control={form.control} name="weddingDate" label="예식일" required={true} />
        <div className="flex justify-between">
          <div className="flex-1">
            <TimeInputFormItem
              control={form.control}
              name="hour"
              label="예식 시간"
              placeholder="00시"
              required={true}
              unit="시"
              range={[0, 23]}
            />
          </div>
          <div className="flex-1 pl-[16px] flex flex-col justify-end">
            <TimeInputFormItem control={form.control} name="min" placeholder="00분" unit="분" range={[0, 59]} />
          </div>
        </div>
        <InputFormItem control={form.control} name="weddingHall" label="예식장소" placeholder="예식장을 입력해주세요" />
      </form>
    </Form>
  );
}
