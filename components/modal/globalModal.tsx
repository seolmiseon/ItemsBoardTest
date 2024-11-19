'use client';

import { useModalStore } from '@/commons/store/useModalStore';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';

export default function GlobalModal() {
    const { isOpen, type, title, message, onConfirm, onCancel, closeModal } =
        useModalStore();

    return (
        <>
            <Dialog open={isOpen} onOpenChange={closeModal}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{message}</DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        {type === 'confirm' && (
                            <Button
                                variant="outline"
                                onClick={() => {
                                    onCancel?.();
                                    closeModal();
                                }}
                            >
                                취소
                            </Button>
                        )}
                        <Button
                            onClick={() => {
                                onConfirm?.();
                                closeModal();
                            }}
                        >
                            확인
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
