import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import PresentationRow from './row';
import { IPresentation } from './IPresentation';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { DateTime } from 'luxon';

import { IRow } from '../common/IRow';
import Util from '../common/Util';

type Payload = IPresentation.Payload;
type Item = IPresentation.Item;

export const Presentation = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="ETC">
      <PresentationRow payload={payload} />
    </CommonSection>
  );
}
