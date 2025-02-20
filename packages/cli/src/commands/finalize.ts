import { IPOCrossApp } from '../ipocross'
import { loadConfig } from '../config'

async function main() {
  const args = process.argv.slice(2)
  if (args.length !== 1) {
    console.error('Usage: finalize <ipocross_address>')
    process.exit(1)
  }

  const [ipoCrossAddress] = args

  const config = await loadConfig()
  const app = new IPOCrossApp(config)
  await app.init()

  // Use the first player to finalize
  const finalizer = config.players[0].name
  await app.finalizeIPOCross(finalizer, ipoCrossAddress as `0x${string}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
}) 