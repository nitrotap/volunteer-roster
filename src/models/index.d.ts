import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerVolunteer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Volunteer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly CRMID?: string | null;
  readonly dateStarted?: string | null;
  readonly dateBackground?: string | null;
  readonly dateMission?: string | null;
  readonly staffPartner?: string | null;
  readonly programCount?: number | null;
  readonly constituentServedCount?: number | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVolunteer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Volunteer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly CRMID?: string | null;
  readonly dateStarted?: string | null;
  readonly dateBackground?: string | null;
  readonly dateMission?: string | null;
  readonly staffPartner?: string | null;
  readonly programCount?: number | null;
  readonly constituentServedCount?: number | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Volunteer = LazyLoading extends LazyLoadingDisabled ? EagerVolunteer : LazyVolunteer

export declare const Volunteer: (new (init: ModelInit<Volunteer>) => Volunteer) & {
  copyOf(source: Volunteer, mutator: (draft: MutableModel<Volunteer>) => MutableModel<Volunteer> | void): Volunteer;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly Volunteers?: (Volunteer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly Volunteers: AsyncCollection<Volunteer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}