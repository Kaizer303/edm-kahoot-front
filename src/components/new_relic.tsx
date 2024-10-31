
import configs from '@/configs'
import axios from 'axios'
import Script from 'next/script'

const getNewRelicTimerHader = async () => {
    try {
        const { data } = await axios.get(`${configs.APP_URL}${configs.URL_PREFIX}/observer/new-relic/timer-header`)
        return data.script
    } catch (err) {
        console.error('[getNewRelicTimerHader] failed to get new relic header')
        return null
    }
}

const NewRelic = async () => {
    if (!configs.NEW_RELIC_AGENT_ENABLED) {
        return null
    }

    const __html = await getNewRelicTimerHader()
    if (!__html) {
        return null
    }

    return (
        <Script
            id='new-relic'
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html }}
        />
    )
}

export default NewRelic