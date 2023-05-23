import { IconsType } from "@/components/atoms/Icon/icons"

export const ActivityNames = {
  Focus: 'Focus',
  Short_Break: 'Short_Break',
  Long_Break: 'Long_Break',
} as const

type ActivityVariants = typeof ActivityNames[keyof typeof ActivityNames]

export abstract class Activity {
  abstract id: ActivityVariants
  abstract icon: IconsType
  abstract title: string
  abstract notification: string
  abstract getNextActivity(): Activity
  prevActivity: Activity | null = null
  setPrevActivity(Activity: Activity): void {
    this.prevActivity = Activity
  }
}


export class LongBreakActivity extends Activity {
  title = 'Long Break'
  readonly icon = "cup"
  readonly notification = 'Time to have a rest!'
  id = ActivityNames.Long_Break
  constructor() {
    super()
  }
  getNextActivity() {
    const newActivity = new FocusActivity()
    newActivity.prevActivity = this
    return newActivity
  }
}

export class FocusActivity extends Activity {
  id = ActivityNames.Focus
  readonly icon = "brain"
  readonly notification = 'Get to work!'
  title = 'Focus'
  constructor() {
    super()
  }
  getNextActivity() {
    return this.prevActivity?.id === ActivityNames.Short_Break ? new LongBreakActivity() : new ShortBreakActivity()
  }
}

export class ShortBreakActivity extends Activity {
  id = ActivityNames.Short_Break
  readonly icon = "cup"
  readonly notification = 'Take a breather!'
  title = 'Short Break'
  constructor() {
    super()
  }

  getNextActivity() {
    const newActivity = new FocusActivity()
    newActivity.prevActivity = this
    return newActivity
  }
}
