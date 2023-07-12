'use client'

import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './initialContent'
import { lowlight } from 'lowlight'
import javascript from 'highlight.js/lib/languages/javascript'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'

import {
    RxFontBold,
    RxFontItalic,
    RxStrikethrough,
    RxCode
} from 'react-icons/rx'

import 'highlight.js/styles/tokyo-night-dark.css'
import { BubbleButton } from './BubbleButton'

lowlight.registerLanguage('javascript', javascript)
export function Editor() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            CodeBlockLowlight.configure({
                lowlight,
            }),
        ],
        content: initialContent,
        editorProps: {
            attributes: {
                class: 'outline-none',
            }
        }
    })
    return (
        <>
            <EditorContent className='max-w-[700] mx-auto pt-16 prose prose-invert' editor={editor} />
            {editor && (
                <BubbleMenu className='bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600' editor={editor}>
                    <BubbleButton
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        data-active={editor.isActive('bold')}
                    >
                        <RxFontBold className='w-4 h-4' />
                    </BubbleButton>
                    <BubbleButton
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        data-active={editor.isActive('italic')}
                    >
                        <RxFontItalic className='w-4 h-4' />
                    </BubbleButton>
                    <BubbleButton
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        data-active={editor.isActive('strike')}
                    >
                        <RxStrikethrough className='w-4 h-4' />
                    </BubbleButton>
                    <BubbleButton
                        onClick={() => editor.chain().focus().toggleCode().run()}
                        data-active={editor.isActive('code')}
                    >
                        <RxCode className='w-4 h-4' />
                    </BubbleButton>
                </BubbleMenu>
            )}
        </>
    )
}