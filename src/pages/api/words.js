export default function handler(req, res) {
    res.status(200).json([
        { id: 0, name: 'confident', explanation: 'feeling or showing belief on one’s abilities or qualities' },
        { id: 1, name: 'intelligent', explanation: 'smart' },
        { id: 2, name: 'short-tempered', explanation: 'easily or quickly angered' },
        { id: 3, name: 'reliable', explanation: 'able to be trusted or believed' },
        { id: 4, name: 'selfish', explanation: 'egoistic' },
        { id: 5, name: 'outgoing', explanation: 'able to be trusted or believed' },
        { id: 6, name: 'cheerful', explanation: 'happy and optimistic' },
        { id: 7, name: 'shy', explanation: 'nervous and uncomfortable with other people'}
    ])
}
