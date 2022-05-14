import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import PresentationRow from './row';
import { ILicense } from './ILicense';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { DateTime } from 'luxon';

type Payload = ILicense.Payload;

export const License = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="LICENSE">
      <PresentationRow payload={payload} />
    </CommonSection>
  );
}
