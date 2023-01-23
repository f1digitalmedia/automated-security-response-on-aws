// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { Construct } from 'constructs';
import { ControlRunbookDocument, ControlRunbookProps, RemediationScope } from './control_runbook';
import { PlaybookProps } from '../lib/control_runbooks-construct';
import { HardCodedString } from '@cdklabs/cdk-ssm-documents';

export function createControlRunbook(scope: Construct, id: string, props: PlaybookProps): ControlRunbookDocument {
  return new CloudFormation_1_ControlRunbookDocument(scope, id, { ...props, controlId: 'CloudFormation.1' });
}

class CloudFormation_1_ControlRunbookDocument extends ControlRunbookDocument {
  constructor(stage: Construct, id: string, props: ControlRunbookProps) {
    super(stage, id, {
      ...props,
      securityControlId: 'CloudFormation.1',
      remediationName: 'ConfigureSNSTopicForStack',
      scope: RemediationScope.REGIONAL,
      resourceIdName: 'StackArn',
      resourceIdRegex: String.raw`^(arn:(?:aws|aws-us-gov|aws-cn):cloudformation:(?:[a-z]{2}(?:-gov)?-[a-z]+-\d):\d{12}:stack/[a-zA-Z][a-zA-Z0-9-]{0,127}/[a-fA-F0-9]{8}-(?:[a-fA-F0-9]{4}-){3}[a-fA-F0-9]{12})$`,
      updateDescription: HardCodedString.of('Configured SNS topic for notifications'),
    });
  }
}
