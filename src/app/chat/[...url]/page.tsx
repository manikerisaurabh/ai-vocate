

import { redis } from '@/lib/redis';
import { ragChat } from '@/lib/reg-chat'
import React from 'react'
import { ChatWrapper } from '../../components/ChatWrapper';
import { cookies } from 'next/headers';

//type Params = Promise<{ rcdId: string }>
// interface PageProps {
//     params: {
//         url: string | string[] | undefined

//     }
// }

type PageProps = {
    params: Promise<{ url: string | string[] | undefined }>
}


function reconstructUrl({ url }: { url: string[] }) {
    const decodedComponents = url.map((component) => decodeURIComponent(component));

    return decodedComponents.join('/')
}
const Page = async ({ params }: PageProps) => {
    const sessionCookie = (await cookies()).get("sessionId")?.value;
    const reconstructedUrl = reconstructUrl({ url: (await params).url as string[] })

    const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(/\//g, "")

    const isAlreadyIndexe = await redis.sismember("indexed-urls", reconstructedUrl);

    const initialMessages = await ragChat.history.getMessages({ amount: 10, sessionId }) //amount is to get last 10 messages we can increase that 
    if (!isAlreadyIndexe) {

        await ragChat.context.add({
            type: "html",
            source: reconstructedUrl,
            config: { chunkOverlap: 50, chunkSize: 200 }
        })

        await redis.sadd("indexed-urls", reconstructedUrl);
    }
    return (
        <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
    )
}

export default Page

