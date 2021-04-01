import { ApiProperty } from "@nestjs/swagger";

import { DateType } from "../contest.service";

export class CreateContestRequestDto {

  @ApiProperty()
  readonly contestName: string;

  @ApiProperty()
  readonly startTime: DateType;

  @ApiProperty()
  readonly endTime: DateType;

  @ApiProperty()
  readonly frozenStartTime?: DateType;

  @ApiProperty()
  readonly frozenEndTime?: DateType;

  @ApiProperty()
  readonly isPublic?: boolean;
}
