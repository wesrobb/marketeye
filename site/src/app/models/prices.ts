import { PriceEntry } from "./priceentry";

export class Prices {
	exchange: string
	marketOpenMin: number
	marketCloseMin: number
	timezoneOffsetMin: number
	priceEntryIntervalSec: number
	priceEntries: PriceEntry[]
}