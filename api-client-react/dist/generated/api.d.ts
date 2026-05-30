import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ApiError, Category, CategoryInput, DirectFireInput, FireInput, HealthStatus, HistoryEntry, ListHistoryParams, ListTemplatesParams, OpenaiConversation, OpenaiConversationInput, OpenaiConversationWithMessages, OpenaiError, OpenaiMessageInput, Stats, SummarizeInput, Template, TemplateInput, TemplateUpdate } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListCategoriesUrl: () => string;
/**
 * @summary List all categories
 */
export declare const listCategories: (options?: RequestInit) => Promise<Category[]>;
export declare const getListCategoriesQueryKey: () => readonly ["/api/categories"];
export declare const getListCategoriesQueryOptions: <TData = Awaited<ReturnType<typeof listCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCategories>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listCategories>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof listCategories>>>;
export type ListCategoriesQueryError = ErrorType<unknown>;
/**
 * @summary List all categories
 */
export declare function useListCategories<TData = Awaited<ReturnType<typeof listCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCategories>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateCategoryUrl: () => string;
/**
 * @summary Create a new category
 */
export declare const createCategory: (categoryInput: CategoryInput, options?: RequestInit) => Promise<Category>;
export declare const getCreateCategoryMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createCategory>>, TError, {
        data: BodyType<CategoryInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createCategory>>, TError, {
    data: BodyType<CategoryInput>;
}, TContext>;
export type CreateCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof createCategory>>>;
export type CreateCategoryMutationBody = BodyType<CategoryInput>;
export type CreateCategoryMutationError = ErrorType<unknown>;
/**
* @summary Create a new category
*/
export declare const useCreateCategory: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createCategory>>, TError, {
        data: BodyType<CategoryInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createCategory>>, TError, {
    data: BodyType<CategoryInput>;
}, TContext>;
export declare const getDeleteCategoryUrl: (id: number) => string;
/**
 * @summary Delete a category
 */
export declare const deleteCategory: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteCategoryMutationOptions: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteCategory>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteCategory>>, TError, {
    id: number;
}, TContext>;
export type DeleteCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof deleteCategory>>>;
export type DeleteCategoryMutationError = ErrorType<ApiError>;
/**
* @summary Delete a category
*/
export declare const useDeleteCategory: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteCategory>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteCategory>>, TError, {
    id: number;
}, TContext>;
export declare const getListTemplatesUrl: (params?: ListTemplatesParams) => string;
/**
 * @summary List all prompt templates
 */
export declare const listTemplates: (params?: ListTemplatesParams, options?: RequestInit) => Promise<Template[]>;
export declare const getListTemplatesQueryKey: (params?: ListTemplatesParams) => readonly ["/api/templates", ...ListTemplatesParams[]];
export declare const getListTemplatesQueryOptions: <TData = Awaited<ReturnType<typeof listTemplates>>, TError = ErrorType<unknown>>(params?: ListTemplatesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTemplates>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listTemplates>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListTemplatesQueryResult = NonNullable<Awaited<ReturnType<typeof listTemplates>>>;
export type ListTemplatesQueryError = ErrorType<unknown>;
/**
 * @summary List all prompt templates
 */
export declare function useListTemplates<TData = Awaited<ReturnType<typeof listTemplates>>, TError = ErrorType<unknown>>(params?: ListTemplatesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTemplates>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateTemplateUrl: () => string;
/**
 * @summary Create a new prompt template
 */
export declare const createTemplate: (templateInput: TemplateInput, options?: RequestInit) => Promise<Template>;
export declare const getCreateTemplateMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTemplate>>, TError, {
        data: BodyType<TemplateInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createTemplate>>, TError, {
    data: BodyType<TemplateInput>;
}, TContext>;
export type CreateTemplateMutationResult = NonNullable<Awaited<ReturnType<typeof createTemplate>>>;
export type CreateTemplateMutationBody = BodyType<TemplateInput>;
export type CreateTemplateMutationError = ErrorType<unknown>;
/**
* @summary Create a new prompt template
*/
export declare const useCreateTemplate: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTemplate>>, TError, {
        data: BodyType<TemplateInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createTemplate>>, TError, {
    data: BodyType<TemplateInput>;
}, TContext>;
export declare const getGetTemplateUrl: (id: number) => string;
/**
 * @summary Get a single template
 */
export declare const getTemplate: (id: number, options?: RequestInit) => Promise<Template>;
export declare const getGetTemplateQueryKey: (id: number) => readonly [`/api/templates/${number}`];
export declare const getGetTemplateQueryOptions: <TData = Awaited<ReturnType<typeof getTemplate>>, TError = ErrorType<ApiError>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTemplate>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTemplate>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTemplateQueryResult = NonNullable<Awaited<ReturnType<typeof getTemplate>>>;
export type GetTemplateQueryError = ErrorType<ApiError>;
/**
 * @summary Get a single template
 */
export declare function useGetTemplate<TData = Awaited<ReturnType<typeof getTemplate>>, TError = ErrorType<ApiError>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTemplate>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateTemplateUrl: (id: number) => string;
/**
 * @summary Update a prompt template
 */
export declare const updateTemplate: (id: number, templateUpdate: TemplateUpdate, options?: RequestInit) => Promise<Template>;
export declare const getUpdateTemplateMutationOptions: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTemplate>>, TError, {
        id: number;
        data: BodyType<TemplateUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateTemplate>>, TError, {
    id: number;
    data: BodyType<TemplateUpdate>;
}, TContext>;
export type UpdateTemplateMutationResult = NonNullable<Awaited<ReturnType<typeof updateTemplate>>>;
export type UpdateTemplateMutationBody = BodyType<TemplateUpdate>;
export type UpdateTemplateMutationError = ErrorType<ApiError>;
/**
* @summary Update a prompt template
*/
export declare const useUpdateTemplate: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTemplate>>, TError, {
        id: number;
        data: BodyType<TemplateUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateTemplate>>, TError, {
    id: number;
    data: BodyType<TemplateUpdate>;
}, TContext>;
export declare const getDeleteTemplateUrl: (id: number) => string;
/**
 * @summary Delete a prompt template
 */
export declare const deleteTemplate: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteTemplateMutationOptions: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTemplate>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteTemplate>>, TError, {
    id: number;
}, TContext>;
export type DeleteTemplateMutationResult = NonNullable<Awaited<ReturnType<typeof deleteTemplate>>>;
export type DeleteTemplateMutationError = ErrorType<ApiError>;
/**
* @summary Delete a prompt template
*/
export declare const useDeleteTemplate: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTemplate>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteTemplate>>, TError, {
    id: number;
}, TContext>;
export declare const getFireTemplateUrl: (id: number) => string;
/**
 * @summary Fire a template - send assembled prompt to AI (streaming SSE)
 */
export declare const fireTemplate: (id: number, fireInput: FireInput, options?: RequestInit) => Promise<unknown>;
export declare const getFireTemplateMutationOptions: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof fireTemplate>>, TError, {
        id: number;
        data: BodyType<FireInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof fireTemplate>>, TError, {
    id: number;
    data: BodyType<FireInput>;
}, TContext>;
export type FireTemplateMutationResult = NonNullable<Awaited<ReturnType<typeof fireTemplate>>>;
export type FireTemplateMutationBody = BodyType<FireInput>;
export type FireTemplateMutationError = ErrorType<ApiError>;
/**
* @summary Fire a template - send assembled prompt to AI (streaming SSE)
*/
export declare const useFireTemplate: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof fireTemplate>>, TError, {
        id: number;
        data: BodyType<FireInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof fireTemplate>>, TError, {
    id: number;
    data: BodyType<FireInput>;
}, TContext>;
export declare const getDirectFireUrl: () => string;
/**
 * @summary Direct fire without a template (streaming SSE)
 */
export declare const directFire: (directFireInput: DirectFireInput, options?: RequestInit) => Promise<unknown>;
export declare const getDirectFireMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof directFire>>, TError, {
        data: BodyType<DirectFireInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof directFire>>, TError, {
    data: BodyType<DirectFireInput>;
}, TContext>;
export type DirectFireMutationResult = NonNullable<Awaited<ReturnType<typeof directFire>>>;
export type DirectFireMutationBody = BodyType<DirectFireInput>;
export type DirectFireMutationError = ErrorType<void>;
/**
* @summary Direct fire without a template (streaming SSE)
*/
export declare const useDirectFire: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof directFire>>, TError, {
        data: BodyType<DirectFireInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof directFire>>, TError, {
    data: BodyType<DirectFireInput>;
}, TContext>;
export declare const getSummarizeTextUrl: () => string;
/**
 * @summary Summarize or expand a block of text (streaming SSE)
 */
export declare const summarizeText: (summarizeInput: SummarizeInput, options?: RequestInit) => Promise<unknown>;
export declare const getSummarizeTextMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof summarizeText>>, TError, {
        data: BodyType<SummarizeInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof summarizeText>>, TError, {
    data: BodyType<SummarizeInput>;
}, TContext>;
export type SummarizeTextMutationResult = NonNullable<Awaited<ReturnType<typeof summarizeText>>>;
export type SummarizeTextMutationBody = BodyType<SummarizeInput>;
export type SummarizeTextMutationError = ErrorType<void>;
/**
* @summary Summarize or expand a block of text (streaming SSE)
*/
export declare const useSummarizeText: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof summarizeText>>, TError, {
        data: BodyType<SummarizeInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof summarizeText>>, TError, {
    data: BodyType<SummarizeInput>;
}, TContext>;
export declare const getListHistoryUrl: (params?: ListHistoryParams) => string;
/**
 * @summary List prompt history entries
 */
export declare const listHistory: (params?: ListHistoryParams, options?: RequestInit) => Promise<HistoryEntry[]>;
export declare const getListHistoryQueryKey: (params?: ListHistoryParams) => readonly ["/api/history", ...ListHistoryParams[]];
export declare const getListHistoryQueryOptions: <TData = Awaited<ReturnType<typeof listHistory>>, TError = ErrorType<unknown>>(params?: ListHistoryParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listHistory>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listHistory>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListHistoryQueryResult = NonNullable<Awaited<ReturnType<typeof listHistory>>>;
export type ListHistoryQueryError = ErrorType<unknown>;
/**
 * @summary List prompt history entries
 */
export declare function useListHistory<TData = Awaited<ReturnType<typeof listHistory>>, TError = ErrorType<unknown>>(params?: ListHistoryParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listHistory>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getDeleteHistoryEntryUrl: (id: number) => string;
/**
 * @summary Delete a history entry
 */
export declare const deleteHistoryEntry: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteHistoryEntryMutationOptions: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteHistoryEntry>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteHistoryEntry>>, TError, {
    id: number;
}, TContext>;
export type DeleteHistoryEntryMutationResult = NonNullable<Awaited<ReturnType<typeof deleteHistoryEntry>>>;
export type DeleteHistoryEntryMutationError = ErrorType<ApiError>;
/**
* @summary Delete a history entry
*/
export declare const useDeleteHistoryEntry: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteHistoryEntry>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteHistoryEntry>>, TError, {
    id: number;
}, TContext>;
export declare const getGetStatsUrl: () => string;
/**
 * @summary Get dashboard stats - template counts, usage totals, recent activity
 */
export declare const getStats: (options?: RequestInit) => Promise<Stats>;
export declare const getGetStatsQueryKey: () => readonly ["/api/stats"];
export declare const getGetStatsQueryOptions: <TData = Awaited<ReturnType<typeof getStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getStats>>>;
export type GetStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get dashboard stats - template counts, usage totals, recent activity
 */
export declare function useGetStats<TData = Awaited<ReturnType<typeof getStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListOpenaiConversationsUrl: () => string;
/**
 * @summary List all conversations
 */
export declare const listOpenaiConversations: (options?: RequestInit) => Promise<OpenaiConversation[]>;
export declare const getListOpenaiConversationsQueryKey: () => readonly ["/api/openai/conversations"];
export declare const getListOpenaiConversationsQueryOptions: <TData = Awaited<ReturnType<typeof listOpenaiConversations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listOpenaiConversations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listOpenaiConversations>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListOpenaiConversationsQueryResult = NonNullable<Awaited<ReturnType<typeof listOpenaiConversations>>>;
export type ListOpenaiConversationsQueryError = ErrorType<unknown>;
/**
 * @summary List all conversations
 */
export declare function useListOpenaiConversations<TData = Awaited<ReturnType<typeof listOpenaiConversations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listOpenaiConversations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateOpenaiConversationUrl: () => string;
/**
 * @summary Create a new conversation
 */
export declare const createOpenaiConversation: (openaiConversationInput: OpenaiConversationInput, options?: RequestInit) => Promise<OpenaiConversation>;
export declare const getCreateOpenaiConversationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createOpenaiConversation>>, TError, {
        data: BodyType<OpenaiConversationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createOpenaiConversation>>, TError, {
    data: BodyType<OpenaiConversationInput>;
}, TContext>;
export type CreateOpenaiConversationMutationResult = NonNullable<Awaited<ReturnType<typeof createOpenaiConversation>>>;
export type CreateOpenaiConversationMutationBody = BodyType<OpenaiConversationInput>;
export type CreateOpenaiConversationMutationError = ErrorType<unknown>;
/**
* @summary Create a new conversation
*/
export declare const useCreateOpenaiConversation: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createOpenaiConversation>>, TError, {
        data: BodyType<OpenaiConversationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createOpenaiConversation>>, TError, {
    data: BodyType<OpenaiConversationInput>;
}, TContext>;
export declare const getGetOpenaiConversationUrl: (id: number) => string;
/**
 * @summary Get conversation with messages
 */
export declare const getOpenaiConversation: (id: number, options?: RequestInit) => Promise<OpenaiConversationWithMessages>;
export declare const getGetOpenaiConversationQueryKey: (id: number) => readonly [`/api/openai/conversations/${number}`];
export declare const getGetOpenaiConversationQueryOptions: <TData = Awaited<ReturnType<typeof getOpenaiConversation>>, TError = ErrorType<OpenaiError>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getOpenaiConversation>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getOpenaiConversation>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetOpenaiConversationQueryResult = NonNullable<Awaited<ReturnType<typeof getOpenaiConversation>>>;
export type GetOpenaiConversationQueryError = ErrorType<OpenaiError>;
/**
 * @summary Get conversation with messages
 */
export declare function useGetOpenaiConversation<TData = Awaited<ReturnType<typeof getOpenaiConversation>>, TError = ErrorType<OpenaiError>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getOpenaiConversation>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getDeleteOpenaiConversationUrl: (id: number) => string;
/**
 * @summary Delete a conversation
 */
export declare const deleteOpenaiConversation: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteOpenaiConversationMutationOptions: <TError = ErrorType<OpenaiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteOpenaiConversation>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteOpenaiConversation>>, TError, {
    id: number;
}, TContext>;
export type DeleteOpenaiConversationMutationResult = NonNullable<Awaited<ReturnType<typeof deleteOpenaiConversation>>>;
export type DeleteOpenaiConversationMutationError = ErrorType<OpenaiError>;
/**
* @summary Delete a conversation
*/
export declare const useDeleteOpenaiConversation: <TError = ErrorType<OpenaiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteOpenaiConversation>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteOpenaiConversation>>, TError, {
    id: number;
}, TContext>;
export declare const getSendOpenaiMessageUrl: (id: number) => string;
/**
 * @summary Send a text message and receive a streaming text response
 */
export declare const sendOpenaiMessage: (id: number, openaiMessageInput: OpenaiMessageInput, options?: RequestInit) => Promise<unknown>;
export declare const getSendOpenaiMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendOpenaiMessage>>, TError, {
        id: number;
        data: BodyType<OpenaiMessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendOpenaiMessage>>, TError, {
    id: number;
    data: BodyType<OpenaiMessageInput>;
}, TContext>;
export type SendOpenaiMessageMutationResult = NonNullable<Awaited<ReturnType<typeof sendOpenaiMessage>>>;
export type SendOpenaiMessageMutationBody = BodyType<OpenaiMessageInput>;
export type SendOpenaiMessageMutationError = ErrorType<unknown>;
/**
* @summary Send a text message and receive a streaming text response
*/
export declare const useSendOpenaiMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendOpenaiMessage>>, TError, {
        id: number;
        data: BodyType<OpenaiMessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendOpenaiMessage>>, TError, {
    id: number;
    data: BodyType<OpenaiMessageInput>;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map