'use client'

import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react'
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
                <FloatingMenu
                    className='bg-zinc-700 py-2 px-1 shadow-xl border gap-1 border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex flex-col'
                    editor={editor}
                    shouldShow={({ state }) => {
                        const { $from } = state.selection
                        const currentLineText = $from.nodeBefore?.textContent // pega o bloco anterior - conteúdo

                        return currentLineText === '/' //verifica que esse bloco anterior é igual a '/' 
                    }}
                >
                    <button
                        className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600'
                    >
                        <img
                            src="https://www.notion.so/images/blocks/text/en-US.png"
                            alt="Text"
                            className='w-12 border-zinc-600 rounded'
                        />
                        <div
                            className='flex flex-col text-left'
                        >
                            <span className='text-sm'>Text</span>
                            <span className='text-xs text-zinc-400'>Just start writing with plain text.</span>
                        </div>
                    </button>

                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600'
                    >
                        <img
                            src="https://www.notion.so/images/blocks/header.57a7576a.png"
                            alt="Heading"
                            className='w-12 border-zinc-600 rounded'
                        />
                        <div
                            className='flex flex-col text-left'
                        >
                            <span className='text-sm'>Heading</span>
                            <span className='text-xs text-zinc-400'>Big section heading.</span>
                        </div>
                    </button>
                </FloatingMenu>
            )}
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