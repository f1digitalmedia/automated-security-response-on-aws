// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { Construct } from 'constructs';
import { PlaybookProps } from '../../SC/lib/control_runbooks-construct';
import { ControlRunbookDocument } from '../../SC/ssmdocs/control_runbook';
import { KMS_4_ControlRunbookDocument } from '../../SC/ssmdocs/SC_KMS.4';

export function createControlRunbook(stage: Construct, id: string, props: PlaybookProps): ControlRunbookDocument {
  return new KMS_4_ControlRunbookDocument(stage, id, { ...props, controlId: '3.8' });
}
